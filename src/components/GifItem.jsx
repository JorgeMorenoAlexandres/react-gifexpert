
export const GifItem = ( {title, url} ) => {
  return (
    <>
        <div className="card" href="#">
            <img src={url} alt={title} />
            <p>{title} </p>
        </div>
    </>
)
}
