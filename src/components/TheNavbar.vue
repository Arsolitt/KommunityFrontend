<script setup>
import { useNavbarStore } from '@/store/NavbarStore.js';

const navbarStore = useNavbarStore();
</script>

<template>
	<nav>
		<RouterLink :to="{ name: 'Home' }" class="logo">
			<img alt="" src="@/assets/svg/logo.svg" />
		</RouterLink>
		<ul class="menu">
			<li class="menu__item">
				<RouterLink
					:class="{ item__link_active: navbarStore.activeLinks['services'] }"
					:to="{ name: 'Home', hash: '#services' }"
					class="item__link">
					Работы
				</RouterLink>
			</li>
			<li class="menu__item">
				<RouterLink
					:class="{ item__link_active: navbarStore.activeLinks['team'] }"
					:to="{ name: 'Home', hash: '#team' }"
					class="item__link">
					Команда
				</RouterLink>
			</li>
			<li class="menu__item">
				<RouterLink
					:class="{ item__link_active: navbarStore.activeLinks['reviews'] }"
					:to="{ name: 'Home', hash: '#reviews' }"
					class="item__link">
					Отзывы
				</RouterLink>
			</li>
			<li class="menu__item">
				<RouterLink
					:class="{ item__link_active: navbarStore.activeLinks['shop'] }"
					:to="{ name: 'Shop' }"
					class="item__link">
					Магазин
				</RouterLink>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
nav {
	background-color: #fff;
	width: 100%;
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
	height: 44px;
}
.logo {
	display: inline;
	margin-left: 16px;
	margin-right: 32px;

	img {
		vertical-align: bottom;
		min-width: 22px;
		min-height: 24px;
		width: 100%;
		height: 100%;
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
