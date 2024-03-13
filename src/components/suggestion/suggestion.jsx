import styles from './suggestion.module.css';

const suggestions = [
    {
        name: 'Umbrella',
        text: 'No need',
        icon: 'fa-solid fa-umbrella',
        statusColor: '#00FF00'
    },
    {
        name: 'Outdoors',
        text: 'Great',
        icon: 'fa-solid fa-person-running',
        statusColor: '#00FF00'
    },
    {
        name: 'Clothing',
        text: 'Light',
        icon: 'fa-solid fa-tshirt',
        statusColor: '#6aa6de'
    },
    {
        name: 'Heat stroke',
        text: 'Low risk',
        icon: 'fa-solid fa-temperature-quarter',
        statusColor: '#00FF00'
    }
]

export default function Suggestion() {
    return (
        <div className={`${styles.suggestion} glass-container`}>
            <p className={styles.title}>Suggestions for your day</p>
            <div className={styles.suggestionList}>
                {suggestions.map(suggestion => (
                    <div className={styles.suggestionItem} key={suggestion.name}>
                        <div className={styles.iconWrapper}>
                            <i className={`${styles.icon} ${suggestion.icon}`}></i>
                        </div>
                        <p className={styles.name}>{suggestion.name}</p>
                        <p className={styles.text}>
                            <span style={{color: suggestion.statusColor}}>&#x25CF;</span>
                            {suggestion.text}</p>
                    </div>
                ))}
            </div>
            <button className={styles.seeMore}>See more</button>
        </div>
    );
}