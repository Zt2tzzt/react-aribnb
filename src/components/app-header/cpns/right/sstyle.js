import styled from 'styled-components';

const RightWrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	color: ${props => props.theme.text.primary};
	font-weight: 600;

	.btns {
		display: flex;
		box-sizing: content-box;
		margin-right: 8px;
		color: ${props => props.theme.isAlpha ? '#fff' : props.theme.text.primary};

		.btn {
			height: 18px;
			line-height: 18px;
			padding: 12px 15px;
			border-radius: 22px;
			cursor: pointer;
			box-sizing: content-box;

			&:hover {
				background-color: ${props => props.theme.isAlpha ? 'rgba(255,255,255,.3)' : '#f5f5f5'};
			}
		}
	}

	.profile {
		position: relative;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 77px;
		height: 42px;
		margin-right: 24px;
		box-sizing: border-box;
		border: 1px #ccc solid;
		border-radius: 25px;
		background-color: #fff;
		color: ${props => props.theme.text.primary};
		cursor: pointer;
		
		${props => props.theme.mixin.boxShadow}; // 混入阴影渐变动画

		.panel {
			position: absolute;
			top: 54px;
			right: 0;
			width: 240px;
			background-color: #fff;
			border-radius: 10px;
			box-shadow: 0 0 6px rgba(0,0,0,.2);
			color: ${props => props.theme.text.secondary};

			.top, .bottom {
				padding: 10px 0;

				.item {
					height: 40px;
					line-height: 40px;
					padding: 0 10px;
					font-weight: 400;

					&:hover {
						background-color: #f5f5f5;
					}
				}

				.register {
					font-weight: 700;
				}
			}

			.top {
				border-bottom: 1px #ddd solid;
			}

			
		}

	}
`

export default RightWrapper