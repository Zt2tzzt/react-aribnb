import styled from 'styled-components'

const PaginationWrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.MuiPaginationItem-icon {
		font-size: 24px;
	}

	.MuiPaginationItem-page {
		margin: 0 9px;

		&:hover {
			text-decoration: underline;
		}
	}

	.MuiPaginationItem-page.Mui-selected {
		background-color: #222;
		color: #fff;
	}

	.desc {
		margin-top: 16px;
		color: #222;
	}
`

export default PaginationWrapper
