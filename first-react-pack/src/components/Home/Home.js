import SearchForm from "../SearchForm/SearchForm";
import Hero from "../Hero/Hero";
import List from "../List/List";
import Container from "../Container/Container";


const Home = props =>{
    return(
        <Container>
            <Hero />
            <SearchForm />
            <List />
        </Container>
    )
};

export default Home;
