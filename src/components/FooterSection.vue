<script setup></script>

<template>
	<footer class="footer">
		<h4 class="footer__header">Оцените нашу последнюю работу:</h4>

		<div class="footer__project">
			<a href="">
				<img alt="" class="footer__img" src="/temp/footer.jpg" />
			</a>
			<a class="footer__name" href="">
				<span>Название проекта в одну строку</span>
			</a>
		</div>

		<div class="footer__text">
			Заходите к нам чаще
			<br />
			и увидите новые творения ;)
		</div>

		<div class="footer__credits">
			<a class="logo" href="">
				<div class="img"></div>
				<span class="name">Комьюнити</span>
			</a>
			<span class="rights">@ 2023 Все права защищены</span>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.footer {
	background-color: #680064;
	padding: 20px 20px 10px 20px;
	border-radius: 20px 20px 0 0;
	&__header {
		font-weight: 700;
		margin-bottom: 18px;
	}
	&__img {
		border-radius: 12px;
		object-fit: cover;
		height: 130px;
		width: 100%;
		display: block;
		margin-bottom: 12px;
	}
	&__name {
		font-size: 14px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.25);
		padding-bottom: 2px;
	}
	&__text {
		font-size: 20px;
		font-weight: 700;
		margin: 24px 0;
	}
	&__credits {
		border-top: 1px solid #b37fb1;
		padding-top: 5px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		.logo {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.img {
				height: 30px;
				width: 30px;
				border-radius: 50%;
				background-color: #d9d9d9;
				margin-right: 5px;
			}
			.name {
				font-size: 12px;
				font-weight: 700;
			}
		}
		.rights {
			font-size: 12px;
		}
	}
}
</style>
