const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return (
        <div className="message-row" >
            {isFirstMessageByUser && (
                <div className="message-avatar" style={{ backgroundImage: `url(${message?.sender?.avatar})` }} />
            )}

            {message?.attachments?.length > 0
            ? (
                    <img src={message.attachments[0].file}
                        alt="message-attachments"
                        className="message-image"
                        style={{ float: 'right' }} />
                ) : (
                    <div className="message-avatar" style={{ backgroundImage: `url(${message?.sender?.avatar})` }} />

                )
            
    }
        </div>
    )
}

export default TheirMessage