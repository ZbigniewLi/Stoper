import styles from './Time.module.scss';

const Time = ({ time }) => {
   const formatTime = millseconds => {
     // Pobranie ilości sekund z podanej liczby milisekund
  const sekundy = Math.floor((millseconds / 1000) % 60);
  
  // Pobranie ilości minut z podanej liczby milisekund
  const minuty = Math.floor((millseconds / (1000 * 60)) % 60);
  
  // Pobranie ilości godzin z podanej liczby milisekund
  const godziny = Math.floor((millseconds / (1000 * 60 * 60)) % 24);

  // Formatowanie godzin, dodanie zera z przodu, jeśli godzina ma tylko jedną cyfrę
  const formatowanaGodzina = godziny.toString().padStart(2, '0');
  
  // Formatowanie minut, dodanie zera z przodu, jeśli minuta ma tylko jedną cyfrę
  const formatowaneMinuty = minuty.toString().padStart(2, '0');
  
  // Formatowanie sekund, dodanie zera z przodu, jeśli sekunda ma tylko jedną cyfrę
  const formatowaneSekundy = sekundy.toString().padStart(2, '0');

  // Zwrócenie sformatowanej wartości godziny, minut i sekund w formacie hh:mm:ss
  return `${formatowanaGodzina}:${formatowaneMinuty}:${formatowaneSekundy}`;
  };

  return (
    <div className={styles.component}>
       {formatTime(time)}
    </div>
  );

};

export default Time;