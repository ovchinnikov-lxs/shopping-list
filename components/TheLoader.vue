<template>
    <div>
        <svg
            id="spinner"
            version="1.1"
            viewBox="0 0 64 64"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                class="path-gradient"
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="url(#sGD)"
                stroke-width="6"
            />
            <path
                class="path-solid"
                d="M 32,4 A 28 28,0,0,0,32,60"
                fill="none"
                stroke="#000"
                stroke-width="6"
                stroke-linecap="round"
            />

            <defs>
                <linearGradient
                    id="sGD"
                    gradientUnits="userSpaceOnUse"
                    x1="32"
                    y1="0"
                    x2="32"
                    y2="64"
                >
                    <stop
                        stop-color="#000"
                        offset="0.1"
                        stop-opacity="0"
                        class="stop1"
                    />
                    <stop
                        stop-color="#000"
                        offset=".9"
                        stop-opacity="1"
                        class="stop2"
                    />
                </linearGradient>
            </defs>

            <animateTransform
                values="0,0,0;360,0,0"
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="750ms"
            />
        </svg>
    </div>
</template>

<style scoped lang="scss">
#spinner {
    width: 48px;
}

#spinner #sGD stop {
    stop-color: var(--ui-primary-color);
}

#spinner .path-solid {
    stroke: var(--ui-primary-color);
}
</style>
