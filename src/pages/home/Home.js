import "./Home.scss";


function Home() {
    return (
        <div className="Home">
            <div className="container">
                <div className="row">
                    <div className="timetable-etc col-12 col-md-6 ">
                        <div className="greeting">
                            Zdravo <b>Marko</b>
                        </div>

                        <div className="heading my-5">
                            <h4>Raspored za ovu nedelju</h4>
                        </div>
                        <div className="timetable align-items-baseline">
                            <div className="timetable-item day-header text-center">
                                Ponedeljak
                            </div>
                            <div className="timetable-item day-header text-center">
                                Utorak
                            </div>
                            <div className="timetable-item day-header text-center">
                                Sreda
                            </div>
                            <div className="timetable-item day-header text-center">
                                Četvrtak
                            </div>
                            <div className="timetable-item day-header text-center">
                                Petak
                            </div>


                            {/*  First row   */}
                            <div className="timetable-item bg-secondary rounded text-white">
                                <div className="subject d-flex flex-column align-items-center justify-content-between">
                                    <p>Multimedijalni sistemi u nastavi informatike</p>
                                    <b>(13:30 - 15:00)</b>
                                </div>

                            </div>
                            <div className="timetable-item bg-secondary rounded text-white">
                                <div className="subject d-flex flex-column align-items-center justify-content-between">
                                    <p>Psihologija</p>
                                    <b>(13:30 - 15:00)</b>
                                </div>
                            </div>
                            <div className="timetable-item bg-secondary rounded text-white">
                                <div className="subject d-flex flex-column align-items-center justify-content-between">
                                    <p>Multimedijalni sistemi u nastavi informatike</p>
                                    <b>(13:30 - 15:00)</b>
                                </div>
                            </div>
                            <div className="timetable-item bg-secondary rounded text-white">
                                <div className="subject d-flex flex-column align-items-center justify-content-between">
                                    <p>Operativni sistemi</p>
                                    <b>(13:30 - 15:00)</b>
                                </div>
                            </div>
                            <div className="timetable-item bg-secondary rounded text-white">
                                <div className="subject d-flex flex-column align-items-center justify-content-between">
                                    <p>Metodika nastave informatike</p>
                                    <b>(13:30 - 15:00)</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="news col-12 col-md-6  bg-light rounded">
                        <h3 className="heading mt-3 ms-3">Obaveštenja</h3>

                        <div className="notice-card bg-white rounded p-3 m-3">
                            <div className="notice-card-heading">
                                <h4>Obaveštenje broj 1</h4>
                                <div className="d-flex justify-content-start gap-5">
                                    <p className="text-muted">Objavio: Marko Markovic</p>
                                    <p className="text-muted">Datum: 14.04.2024.</p>
                                </div>

                            </div>
                            <div className="notice-card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum ligula orci, a rhoncus lorem semper ut. Sed faucibus ac libero eu convallis. In cursus et ligula eget laoreet. Maecenas sodales viverra purus, in vehicula tellus consequat id.... </p>
                            </div>
                        </div>

                        <div className="notice-card bg-white rounded p-3 m-3">
                            <div className="notice-card-heading">
                                <h4>Obaveštenje broj 1</h4>
                                <div className="d-flex justify-content-start gap-5">
                                    <p className="text-muted">Objavio: Marko Markovic</p>
                                    <p className="text-muted">Datum: 14.04.2024.</p>
                                </div>

                            </div>
                            <div className="notice-card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum ligula orci, a rhoncus lorem semper ut. Sed faucibus ac libero eu convallis. In cursus et ligula eget laoreet. Maecenas sodales viverra purus, in vehicula tellus consequat id.... </p>
                            </div>
                        </div>

                        <div className="notice-card bg-white rounded p-3 m-3">
                            <div className="notice-card-heading">
                                <h4>Obaveštenje broj 1</h4>
                                <div className="d-flex justify-content-start gap-5">
                                    <p className="text-muted">Objavio: Marko Markovic</p>
                                    <p className="text-muted">Datum: 14.04.2024.</p>
                                </div>

                            </div>
                            <div className="notice-card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum ligula orci, a rhoncus lorem semper ut. Sed faucibus ac libero eu convallis. In cursus et ligula eget laoreet. Maecenas sodales viverra purus, in vehicula tellus consequat id.... </p>
                            </div>
                        </div>

                        <div className="notice-card bg-white rounded p-3 m-3">
                            <div className="notice-card-heading">
                                <h4>Obaveštenje broj 1</h4>
                                <div className="d-flex justify-content-start gap-5">
                                    <p className="text-muted">Objavio: Marko Markovic</p>
                                    <p className="text-muted">Datum: 14.04.2024.</p>
                                </div>

                            </div>
                            <div className="notice-card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum ligula orci, a rhoncus lorem semper ut. Sed faucibus ac libero eu convallis. In cursus et ligula eget laoreet. Maecenas sodales viverra purus, in vehicula tellus consequat id.... </p>
                            </div>
                        </div>






                    </div>
                </div>

            </div>

        </div>
    );
}

export default Home;
