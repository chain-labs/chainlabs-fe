import 'styled-components';

interface ISpace {
	mxxs: string;
	mxs: string;
	ms: string;
	mm: string;
	ml: string;
	mxl: string;
	mxxl: string;
	mxxxl: string;

	wxxs: string;
	wxs: string;
	ws: string;
	wm: string;
	wl: string;
	wxl: string;
	wxxl: string;
}

interface IBreakpoints {
	mobS: string;
	mobL: string;
	tabS: string;
	tabL: string;
	deskS: string;
	deskM: string;
	deskL: string;
}

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			'white-10': string;
			'grey-100': string;
			'grey-200': string;
			'grey-300': string;
			'grey-400': string;
			'green-100': string;
			'green-200': string;
			'green-300': string;
			'green-400': string;
			'green-500': string;
			'purple-100': string;
			'purple-200': string;
			'purple-300': string;
			'purple-400': string;
			'purple-500': string;
		};
		space: string[] & Partial<ISpace>;
		breakpoints: string[] & Partial<IBreakpoints>;
	}
}
