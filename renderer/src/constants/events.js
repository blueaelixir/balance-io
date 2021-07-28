export const windowEvents = {
	CLOSE_WINDOW: 'WINDOW/CLOSE',
	MINIMIZE_WINDOW: 'WINDOW/MINIMIZE',
	MAXIMIZE_WINDOW: 'WINDOW/MAXIMIZE',
	RESTORE_WINDOW: 'WINDOW/RESTORE',
	IS_WINDOW_MAXIMIZED: 'WINDOW/IS_MAXIMIZED?',
}

export const storageEvents = {
	GET_STORAGE: 'STORAGE/GET',
	SAVE_TO_STORAGE: 'STORAGE/SAVE_DATA',
	DELETE_FROM_STORAGE: 'STORAGE/DELETE_DATA',
	CLEAR_STORAGE: 'STORAGE/CLEAR',
	BACKUP_STORAGE: 'STORAGE/BACKUP',
	GET_FROM_STORAGE: 'STORAGE/GET_DATA',
	GET_BACKUP_STORAGE: 'STORAGE/GET_BACKUP',
}

export const notificationEvents = {
	SHOW_NOTIFICATION: 'NOTIFICATION/SHOW',
}
