interface IProps {
    messages: string[]
}
const Messages = ({messages}:IProps) => {
    console.dir(messages)
    return (
        <div>
            {
                messages.map((el,idx) => (
                    <div key={idx}>{el}</div>
                ))
            }
        </div>
    );
};

export default Messages;