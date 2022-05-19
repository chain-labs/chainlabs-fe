import Box from 'src/components/Box';
import Text from 'src/components/Text';
import theme from 'src/styleguide/theme';

const ColorStyles = () => {
	return (
		<Box height="100vh" column>
			<Box row alignItems="" height="100vh" border="1px solid red">
				<Box
					css={`
						transform-origin: center center;
						transform: rotate(-90deg);
					`}
					mt="37.5rem"
					ml="-15rem"
					position="absolute"
				>
					<Text as="headline" color="purple-500" px="ws" borderBottom="1px solid lightgrey">
						Colour Palette
					</Text>
				</Box>
				<Box row flexWrap="wrap" maxHeight="80vh" mt="ml" ml="15rem" p="mxl">
					<Color color="white-10" />
					<Color color="grey-100" />
					<Color color="grey-200" />
					<Color color="grey-300" />
					<Color color="grey-400" />
					<Color color="green-100" />
					<Color color="green-200" />
					<Color color="green-300" />
					<Color color="green-400" />
					<Color color="green-500" />
					<Color color="purple-100" />
					<Color color="purple-200" />
					<Color color="purple-300" />
					<Color color="purple-400" />
					<Color color="purple-500" />
					<Color color="cyan-100" />
					<Color color="light-ochre" />
					<Color color="slate-blue" />
					<Color color="highlight" />
				</Box>
			</Box>
		</Box>
	);
};

const Color = ({ color }) => {
	function textColor() {
		const col = color.split('-')[0];
		if (col === 'purple' || col === 'grey') {
			return 'white';
		}
		return 'black';
	}

	return (
		<Box
			column
			alignItems="center"
			mx="ml"
			my="ml"
			cursor="pointer"
			onClick={() => navigator.clipboard.writeText(color)}
		>
			<Box
				width="20rem"
				height="20rem"
				bg={theme.colors[color]}
				borderRadius="50%"
				center
				column
				border="0.5px solid lightgrey"
				color={textColor()}
			>
				{color}
				<Text as="h4" mt="mm" textTransform="uppercase">
					{theme.colors[color]}
				</Text>
			</Box>
		</Box>
	);
};

export default ColorStyles;
