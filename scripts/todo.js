/**
 * Todo List Application
 * Features: Add, Edit, Delete, Complete tasks with Local Storage persistence
 */

class TodoApp {
    constructor() {
        this.tasks = [];
        this.currentFilter = 'all';
        this.nextId = 1;
        
        // DOM elements
        this.elements = {
            taskForm: document.getElementById('addTaskForm'),
            taskInput: document.getElementById('taskInput'),
            taskList: document.getElementById('taskList'),
            emptyState: document.getElementById('emptyState'),
            clearAllButton: document.getElementById('clearAllButton'),
            filterButtons: document.querySelectorAll('.filter-button'),
            totalTasks: document.getElementById('totalTasks'),
            completedTasks: document.getElementById('completedTasks'),
            pendingTasks: document.getElementById('pendingTasks'),
            taskTemplate: document.getElementById('taskTemplate')
        };
        
        this.init();
    }
    
    init() {
        this.loadFromStorage();
        this.bindEvents();
        this.render();
        this.updateStats();
    }
    
    bindEvents() {
        // Add task form submission
        this.elements.taskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.addTask();
        });
        
        // Filter buttons
        this.elements.filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const filter = e.target.dataset.filter;
                this.setFilter(filter);
            });
        });
        
        // Clear all button
        this.elements.clearAllButton.addEventListener('click', () => {
            this.clearAllTasks();
        });
        
        // Task list delegation for dynamic elements
        this.elements.taskList.addEventListener('click', (e) => {
            const taskItem = e.target.closest('.task-item');
            if (!taskItem) return;
            
            const taskId = parseInt(taskItem.dataset.id);
            
            if (e.target.closest('.task-toggle')) {
                this.toggleTask(taskId);
            } else if (e.target.closest('.edit-button')) {
                this.editTask(taskId);
            } else if (e.target.closest('.delete-button')) {
                this.deleteTask(taskId);
            }
        });
        
        // Handle edit input events
        this.elements.taskList.addEventListener('keydown', (e) => {
            if (e.target.classList.contains('task-edit-input')) {
                const taskItem = e.target.closest('.task-item');
                const taskId = parseInt(taskItem.dataset.id);
                
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.saveEdit(taskId);
                } else if (e.key === 'Escape') {
                    this.cancelEdit(taskId);
                }
            }
        });
        
        // Save edit when input loses focus
        this.elements.taskList.addEventListener('blur', (e) => {
            if (e.target.classList.contains('task-edit-input')) {
                const taskItem = e.target.closest('.task-item');
                const taskId = parseInt(taskItem.dataset.id);
                this.saveEdit(taskId);
            }
        }, true);
        
        // Auto-save when page unloads
        window.addEventListener('beforeunload', () => {
            this.saveToStorage();
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + Enter to add task
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                this.elements.taskInput.focus();
            }
        });
    }
    
    addTask() {
        const text = this.elements.taskInput.value.trim();
        if (!text) return;
        
        const task = {
            id: this.nextId++,
            text: text,
            completed: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        this.tasks.unshift(task); // Add to beginning for newest-first order
        this.elements.taskInput.value = '';
        
        this.saveToStorage();
        this.render();
        this.updateStats();
        
        // Show success feedback
        this.showNotification(`Task "${text}" added successfully!`, 'success');
    }
    
    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (!task) return;
        
        task.completed = !task.completed;
        task.updatedAt = new Date().toISOString();
        
        this.saveToStorage();
        this.render();
        this.updateStats();
        
        const status = task.completed ? 'completed' : 'marked as pending';
        this.showNotification(`Task ${status}!`, task.completed ? 'success' : 'info');
    }
    
    editTask(id) {
        const taskItem = document.querySelector(`[data-id="${id}"]`);
        if (!taskItem) return;
        
        const taskText = taskItem.querySelector('.task-text');
        const editInput = taskItem.querySelector('.task-edit-input');
        
        taskItem.classList.add('editing');
        taskText.style.display = 'none';
        editInput.style.display = 'block';
        editInput.value = taskText.textContent;
        editInput.focus();
        editInput.select();
    }
    
    saveEdit(id) {
        const taskItem = document.querySelector(`[data-id="${id}"]`);
        if (!taskItem) return;
        
        const task = this.tasks.find(t => t.id === id);
        if (!task) return;
        
        const editInput = taskItem.querySelector('.task-edit-input');
        const newText = editInput.value.trim();
        
        if (newText && newText !== task.text) {
            task.text = newText;
            task.updatedAt = new Date().toISOString();
            this.saveToStorage();
            this.showNotification('Task updated successfully!', 'success');
        }
        
        this.cancelEdit(id);
        this.render();
    }
    
    cancelEdit(id) {
        const taskItem = document.querySelector(`[data-id="${id}"]`);
        if (!taskItem) return;
        
        const taskText = taskItem.querySelector('.task-text');
        const editInput = taskItem.querySelector('.task-edit-input');
        
        taskItem.classList.remove('editing');
        taskText.style.display = 'block';
        editInput.style.display = 'none';
    }
    
    deleteTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (!task) return;
        
        // Add removal animation
        const taskItem = document.querySelector(`[data-id="${id}"]`);
        taskItem.classList.add('removing');
        
        // Wait for animation to complete
        setTimeout(() => {
            this.tasks = this.tasks.filter(t => t.id !== id);
            this.saveToStorage();
            this.render();
            this.updateStats();
            this.showNotification(`Task "${task.text}" deleted!`, 'error');
        }, 300);
    }
    
    clearAllTasks() {
        if (this.tasks.length === 0) return;
        
        const confirmMessage = `Are you sure you want to delete all ${this.tasks.length} tasks? This action cannot be undone.`;
        if (confirm(confirmMessage)) {
            this.tasks = [];
            this.saveToStorage();
            this.render();
            this.updateStats();
            this.showNotification('All tasks cleared!', 'error');
        }
    }
    
    setFilter(filter) {
        this.currentFilter = filter;
        
        // Update filter button states
        this.elements.filterButtons.forEach(button => {
            button.classList.remove('active');
            button.setAttribute('aria-selected', 'false');
        });
        
        const activeButton = document.querySelector(`[data-filter="${filter}"]`);
        activeButton.classList.add('active');
        activeButton.setAttribute('aria-selected', 'true');
        
        this.render();
    }
    
    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'completed':
                return this.tasks.filter(task => task.completed);
            case 'pending':
                return this.tasks.filter(task => !task.completed);
            default:
                return this.tasks;
        }
    }
    
    render() {
        const filteredTasks = this.getFilteredTasks();
        
        // Clear task list
        this.elements.taskList.innerHTML = '';
        
        // Show/hide empty state
        if (filteredTasks.length === 0) {
            this.elements.emptyState.style.display = 'flex';
            this.elements.clearAllButton.style.display = 'none';
        } else {
            this.elements.emptyState.style.display = 'none';
            this.elements.clearAllButton.style.display = this.tasks.length > 0 ? 'inline-flex' : 'none';
        }
        
        // Render tasks
        filteredTasks.forEach(task => {
            const taskElement = this.createTaskElement(task);
            this.elements.taskList.appendChild(taskElement);
        });
        
        // Update task list aria-label
        this.elements.taskList.setAttribute('aria-label', 
            `${filteredTasks.length} ${this.currentFilter} tasks`);
    }
    
    createTaskElement(task) {
        const template = this.elements.taskTemplate.content.cloneNode(true);
        const taskItem = template.querySelector('.task-item');
        
        // Set task data
        taskItem.dataset.id = task.id;
        taskItem.classList.toggle('completed', task.completed);
        
        // Set task text
        const taskText = taskItem.querySelector('.task-text');
        taskText.textContent = task.text;
        
        // Set accessibility attributes
        const toggleButton = taskItem.querySelector('.task-toggle');
        toggleButton.setAttribute('aria-label', 
            task.completed ? 'Mark task as incomplete' : 'Mark task as complete');
        
        const editButton = taskItem.querySelector('.edit-button');
        editButton.setAttribute('aria-label', `Edit task: ${task.text}`);
        
        const deleteButton = taskItem.querySelector('.delete-button');
        deleteButton.setAttribute('aria-label', `Delete task: ${task.text}`);
        
        return taskItem;
    }
    
    updateStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(task => task.completed).length;
        const pending = total - completed;
        
        this.elements.totalTasks.textContent = total;
        this.elements.completedTasks.textContent = completed;
        this.elements.pendingTasks.textContent = pending;
        
        // Update document title with task count
        document.title = `To-Do List (${pending} pending) - Portfolio Project`;
    }
    
    saveToStorage() {
        try {
            const data = {
                tasks: this.tasks,
                nextId: this.nextId,
                lastSaved: new Date().toISOString()
            };
            localStorage.setItem('todoApp', JSON.stringify(data));
        } catch (error) {
            console.error('Failed to save to localStorage:', error);
            this.showNotification('Failed to save tasks. Please try again.', 'error');
        }
    }
    
    loadFromStorage() {
        try {
            const data = localStorage.getItem('todoApp');
            if (data) {
                const parsed = JSON.parse(data);
                this.tasks = parsed.tasks || [];
                this.nextId = parsed.nextId || 1;
                
                // Ensure nextId is higher than any existing task ID
                if (this.tasks.length > 0) {
                    const maxId = Math.max(...this.tasks.map(t => t.id));
                    this.nextId = Math.max(this.nextId, maxId + 1);
                }
            }
        } catch (error) {
            console.error('Failed to load from localStorage:', error);
            this.showNotification('Failed to load saved tasks.', 'error');
            this.tasks = [];
            this.nextId = 1;
        }
    }
    
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.textContent = message;
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'polite');
        
        // Add notification styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '12px 16px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '500',
            zIndex: '1000',
            opacity: '0',
            transform: 'translateY(-20px)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            maxWidth: '300px',
            wordWrap: 'break-word'
        });
        
        // Set background color based on type
        const colors = {
            success: '#22c55e',
            error: '#ef4444',
            info: '#3b82f6',
            warning: '#f59e0b'
        };
        notification.style.backgroundColor = colors[type] || colors.info;
        
        // Add to DOM
        document.body.appendChild(notification);
        
        // Animate in
        requestAnimationFrame(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        });
        
        // Remove after delay
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    // Public API methods
    exportTasks() {
        const data = {
            tasks: this.tasks,
            exportedAt: new Date().toISOString(),
            totalTasks: this.tasks.length,
            completedTasks: this.tasks.filter(t => t.completed).length
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { 
            type: 'application/json' 
        });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `todo-tasks-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.showNotification('Tasks exported successfully!', 'success');
    }
    
    importTasks(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (data.tasks && Array.isArray(data.tasks)) {
                    this.tasks = data.tasks;
                    this.nextId = Math.max(...this.tasks.map(t => t.id)) + 1;
                    this.saveToStorage();
                    this.render();
                    this.updateStats();
                    this.showNotification(`Imported ${data.tasks.length} tasks!`, 'success');
                } else {
                    throw new Error('Invalid file format');
                }
            } catch (error) {
                this.showNotification('Failed to import tasks. Invalid file format.', 'error');
            }
        };
        reader.readAsText(file);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the todo app
    const app = new TodoApp();
    
    // Make app globally accessible for debugging/external access
    window.todoApp = app;
    
    // Add export/import functionality (could be extended with UI buttons)
    window.exportTasks = () => app.exportTasks();
    window.importTasks = (file) => app.importTasks(file);
    
    // Add keyboard shortcuts info
    console.log('Todo App loaded! Keyboard shortcuts:');
    console.log('- Ctrl/Cmd + Enter: Focus task input');
    console.log('- Enter: Save task edit');
    console.log('- Escape: Cancel task edit');
});

// Service Worker registration for offline functionality (optional enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Could register a service worker here for offline functionality
        console.log('Service Worker support detected');
    });
}

// Handle online/offline status
window.addEventListener('online', () => {
    document.body.classList.remove('offline');
});

window.addEventListener('offline', () => {
    document.body.classList.add('offline');
});

// Performance monitoring
window.addEventListener('load', () => {
    if (window.performance && window.performance.timing) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`Todo App loaded in ${loadTime}ms`);
    }
});