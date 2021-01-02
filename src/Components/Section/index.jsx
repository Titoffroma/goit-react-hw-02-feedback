import Title from '../Title';

const Section = ({ title, children }) => {
    return (
        <>
            <Title title={title} />
            {children}
        </>
    )
}

export default Section;