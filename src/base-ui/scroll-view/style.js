import styled from "styled-components";

const ScrollViewWrapper = styled.div`
	position: relative;
	padding: 8px 0;

	.control {
		position: absolute;
		z-index: 9;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 28px;
		height: 28px;
		border-radius: 50%;
		text-align: center;
		border: 2px #fff solid;
		background-color: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);
		cursor: pointer;

		&.left {
			left: 0;
			top: 50%;
			transform: translate(-50%, -50%);
		}

		&.right {
			right: 0;
			top: 50%;
			transform: translate(50%, -50%);
		}
	}

	.scroll {
		overflow: hidden;

		.scroll-content {
			width: 100%;
			display: flex;
			transition: transform 250ms ease;
		}
	}
`

export default ScrollViewWrapper