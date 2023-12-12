<script setup></script>

<template>
	<nav>
		<a class="logo" href=""><img alt="" src="@/assets/svg/logo.svg" /></a>
		<ul class="menu">
			<li class="menu__item"><a class="item__link" href="#works">Работы</a></li>
			<li class="menu__item"><a class="item__link" href="#team">Команда</a></li>
			<li class="menu__item">
				<a class="item__link" href="#reviews">Отзывы</a>
			</li>
			<li class="menu__item"><a class="item__link" href="#shop">Магазин</a></li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
nav {
	background-color: #fff;
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 9px 0;
	border-bottom-left-radius: 18px;
	border-bottom-right-radius: 18px;
	position: fixed;
	z-index: 5;
	left: 50%;
	transform: translateX(-50%);
}
.logo {
	display: inline;
	margin-left: 16px;
	margin-right: 32px;
	img {
		vertical-align: bottom;
	}
}
.menu {
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-right: 10px;
	.item__link {
		font-size: 14px;
		color: black;
		&_active,
		.no-touch &:hover {
			color: #7a02b6;
		}
	}
}
@media screen and (min-width: 360px) {
	.menu {
		.item__link {
			font-size: 15px;
		}
	}
}

@media screen and (min-width: 410px) {
	.logo {
		margin-left: 24px;
		margin-right: 48px;
	}
	.menu {
		margin-right: 18px;
		.item__link {
			font-size: 16px;
		}
	}
}
</style>
