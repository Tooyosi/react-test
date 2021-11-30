export default function ImageComponent() {
    return (
        <div>
            <div className="text-center d-none d-md-block">
                <img src={require('../../../assets/top_round.svg').default} className="corner-img img-fluid" alt="" />
            </div>

            <div className="text-center">
                <img src={require('../../../assets/side_image.svg').default} className="img-fluid" alt="" />
            </div>
        </div>
    )
}
