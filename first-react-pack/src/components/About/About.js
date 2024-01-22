import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss';

const About =  (props) => {
    return (
        <div className={styles.about}>
        <PageTitle>About</PageTitle> 
        <p>This is the About page.</p>    
       </div>
    );
};
export default About;