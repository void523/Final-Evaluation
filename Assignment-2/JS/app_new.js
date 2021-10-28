const sidebar_toggle = document.querySelector('.toggle-sidebar');

sidebar_toggle.addEventListener('click', () => {
	let sidebar = document.querySelector('.sidebar');
	sidebar.classList.toggle('sidebar-collapse');
});
