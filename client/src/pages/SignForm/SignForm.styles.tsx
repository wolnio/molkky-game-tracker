import { css, styled } from "styled-components";
import { Input } from "../../components/common/Input.styles";
import { glassBackground } from "../../styles/commonStyles";

export const Container = styled.div`
	${glassBackground}

	margin: 0 auto;
	width: 400px;
	padding: 20px;

	& h2 {
		margin: 0;
	}
`;

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: 10px;
`;

export const LabelInputContainer = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
	margin-bottom: 20px;
`;

export const Label = styled.label`
	width: 95px;
`;

export const InputErrorContainer = styled.div`
	//width: 250px;
`;

export const SignInput = styled(Input)`
	width: 100%;
`;

export const ValidationMessage = styled.span`
	color: red;
	display: block;
	margin: 0;
	font-size: 13px;
	right: 0;
`;

export const HeaderTabs = styled.div`
	display: flex;
`;

export const Tab = styled.div<{ $isActive: boolean }>`
	width: 100%;
	height: 30px;
	text-align: center;
	border-bottom: 1px solid gray;
	box-sizing: border-box;
	cursor: default;
	font-size: 18px;

	${(props) =>
		props.$isActive
			? css`
					border-bottom: 3px solid gray;
					font-weight: 600;
			  `
			: css`
					&:hover {
						cursor: pointer;
					}
			  `}
`;
