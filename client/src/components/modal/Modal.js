import "./Modal.scss";

export const Modal = ({ children, closeModal }) => {
	const findByKey = (keyProp) => {
		return children.map((child) => {
			return child.key === keyProp ? child : null;
		});
	};

	const handleCloseModal = (e) => {
		e.stopPropagation();
		if (e.target.classList.contains("modal-close")) {
			return closeModal();
		}
	};
	return (
		<div className="modal-mask modal-close" onClick={handleCloseModal}>
			<div className="modal-wrapper">
				<div className="modal-container">
					<div className="modal-header">{findByKey("header")}</div>
					<div className="modal-body">{findByKey("body")}</div>
					<div className="modal-footer">
						<button className="modal-close" onClick={handleCloseModal}>
							CLOSE
						</button>{" "}
						{findByKey("footer")}
					</div>
				</div>
			</div>
		</div>
	);
};
