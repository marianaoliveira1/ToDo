import styles from './task.module.css'
import { TbTrash} from 'react-icons/tb'
import { ITask } from '../../App';

interface Props {
    task: ITask;
}

export function Task({ task } : Props) {
    return(
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div />
            </button>
            <p>
                {task.title}
            </p>
            <button className={styles.buttonDelete}>
                <TbTrash size={20} />
            </button>
        </div>
    );
}