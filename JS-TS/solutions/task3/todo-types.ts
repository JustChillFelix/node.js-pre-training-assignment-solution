export enum ToDoStatus {
	PENDING = 'PENDING',
	IN_PROGRESS = 'IN_PROGRESS',
	COMPLETED = 'COMPLETED'
}

export interface ToDo {
	id: number;
	title: string;
	description?: string;
	status: ToDoStatus;
	readonly createdAt: Date;
}

export type NewTodo = Omit<ToDo, 'id' | 'createdAt' | 'status'>;