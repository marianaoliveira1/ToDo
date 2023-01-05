import { ITask } from '../../App';
import { Task } from '../Task'
import styles from './task.module.css'

interface Props {
    tasks: ITask[];
    onDelete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete } : Props) {
    const tasksQunatity = tasks.length;
    const completedTasks = tasks.filter((task) => task.isCompleted).length;

    return(
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{tasksQunatity}</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Concluidas</p>
                    <span>{completedTasks} de {tasksQunatity}</span>
                </div>
            </header>
            <div className={styles.list}>
                {
                    tasks.map((task) => (
                        <Task key={task.id} task={task}  onDelete={onDelete}/>
                    ))}
                
            </div>
        </section>
        
    )
}