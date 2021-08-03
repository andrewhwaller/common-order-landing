import Alpine from 'alpinejs';
window.Alpine = Alpine;

Alpine.data('menu', () => ({
    open: false,
    openMenu() {
        this.open = true;
    },
    closeMenu() {
        this.open = false;
    }
}))

Alpine.start();
