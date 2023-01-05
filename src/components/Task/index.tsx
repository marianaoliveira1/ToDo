import styles from './task.module.css'
import { TbTrash} from 'react-icons/tb'

export function Task() {
    return(
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div />
            </button>
            <p>Ir para academia</p>
            <button className={styles.buttonDelete}>
                <TbTrash size={20} />
            </button>
        </div>
    );
}