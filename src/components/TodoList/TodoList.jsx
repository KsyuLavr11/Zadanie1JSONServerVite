import styles from '../../App.module.css';
import { TodoItemEdition } from '../TododItem/TodoItemEdition';

export const TodoList = ({ todos, deleteTodo, updateTodo }) => {
	return (
		<ul className={styles['todo-list-container']}>
			{todos.map((todo) => (
				<li key={todo.id} className={styles['todo-item']}>
					<TodoItemEdition
						todo={todo}
						updateTodo={updateTodo}
						deleteTodo={deleteTodo}
					/>
				</li>
			))}
		</ul>
	);
};
