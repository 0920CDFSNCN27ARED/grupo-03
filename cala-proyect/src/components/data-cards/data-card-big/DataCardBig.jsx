import React from "react";

function DataCardBig(props) {
	return (
		<div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h6 className="m-0 font-weight-bold text-primary">
						Ultimo producto cargado
					</h6>
				</div>
				<div className="card-body">
					<p>{props.name}</p>
					<div className="text-center">
						<img
							className="img-fluid px-3 px-sm-4 mt-3 mb-4"
							style={{ width: "25rem" }}
							src={props.image}
							alt="imagen dummy"
						/>
					</div>
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	);
}

export default DataCardBig;
