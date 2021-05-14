
const MyParagraph = props => {
    console.log('MyParagraph Running')

    return (
        <p>{props.show && props.children}</p>
    )
};

export default MyParagraph;
