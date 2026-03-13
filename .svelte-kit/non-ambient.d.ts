
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>
		};
		Pathname(): "/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.png" | "/images/barrier-card.webp" | "/images/burden-icon.webp" | "/images/cloud-icon.webp" | "/images/cultural-perceptions.webp" | "/images/extra-1.webp" | "/images/extra-2.webp" | "/images/gpa-icon.webp" | "/images/hero-app.webp" | "/images/high/ByaZlG0bjDWG5BVFv5ke65HSlWk.png.webp" | "/images/high/GyNmzQ2poFNQXhj1h32UpgIoMsw.png.webp" | "/images/high/KN50M76qpbtfzmM998eKRnf9860.png.webp" | "/images/high/PClrPzfVPniQBWsXmSLtbmE4.png.webp" | "/images/high/PvumLk2JOtzV7jITqGbrRyec.png.avif" | "/images/high/i6HPHyWbiysJU5N98h1wmu0IFA.png.avif" | "/images/high/yaBU9WBGAhmqDDgQceHTpNjosvQ.png.avif" | "/images/inspiration-card.webp" | "/images/low/3bo6c9yXiSsfY0K05sb0d43Qkeg.png.webp" | "/images/low/9pH3d2YM3HGKPJrL5F2kdXmKPnA.png.webp" | "/images/low/i6x29RbeBVEGLUDq4tLsVeh0SI.png.webp" | "/images/mid/2gaZCDj0yzynLmkwkfpw2TB2It4.png.avif" | "/images/mid/ey8C9oo7YXzrnwTLRUOZOtMo.png.avif" | "/images/mid/zUiIsYWnGU0dtIvqvi7tV7YMk8.png.avif" | "/images/oliver-cafe.webp" | "/images/oliver-overwhelmed.webp" | "/images/oliver-portrait.webp" | "/images/peer-community.webp" | "/images/peer-vs-pro.webp" | "/images/uw-campus.webp" | string & {};
	}
}