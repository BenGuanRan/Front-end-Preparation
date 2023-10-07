import { MouseEventHandler } from 'react';
import styles from './Button.module.css'

export default function Button({ value, onClickFunc }: { value: string, onClickFunc?: MouseEventHandler<HTMLButtonElement> }) {
    console.log(value);
    return (
        <button
            type='button' className={styles.error}
            onClick={onClickFunc}
        >
            {value}
        </button >
    )
}

export async function getStaticProps(context: any) {
    return {
        props: {
            value: 'aaa'
        }
    }
}