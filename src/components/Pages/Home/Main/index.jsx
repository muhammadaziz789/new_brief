import styles from './style.module.scss'
import classNames from 'classnames'
import Banner from '../../../UI/Banner'
export function Main() {

  return (
    <main
      className={classNames(styles.main)}
    >
      <Banner />
    </main>
  )
}
