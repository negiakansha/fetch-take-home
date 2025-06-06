const ImgContainer = ({images}) => {
    return (
        <div className="image-grid">
            {images.map((url, index) => (
                <div className="image-container" key={index}>
                    <img className="image" src={url}/>
                </div>
            ))}
        </div>
    );
}

export default ImgContainer;