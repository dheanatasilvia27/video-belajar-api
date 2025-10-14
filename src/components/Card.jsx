const Card = ({ children}) => {
    return (
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm ">
            {children}
        </div>
    )
}

export default Card;