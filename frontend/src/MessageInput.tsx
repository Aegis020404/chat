import {useState} from "react";

interface IProps {
    onSend: (text: string) => void;
}

const MessageInput = ({onSend}: IProps) => {
    const [value, setValue] = useState('');
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            onSend(value)
            setValue('')
        }}>
            <input placeholder='Type your message...'
                   value={value}
                   onChange={(e) => setValue(e.target.value)}/>
            <button type='submit'>SEND</button>
        </form>
    );
};

export default MessageInput;