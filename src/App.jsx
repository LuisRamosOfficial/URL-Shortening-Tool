import logo from './logo.svg';
import styles from './App.module.scss';

function App() {
  return (
    <div class={styles.App}>
        <div class={styles.title}>
          <h1>URL Shortening</h1>
        </div>
        <div class={styles.box}>
        <p>shortens the link for yourself</p>

        <div class={styles.inputbox}>
          <input/>
          <button>Short it!</button>
        </div>
        </div>
    </div>
  );
}

export default App;
