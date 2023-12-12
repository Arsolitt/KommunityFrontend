<script setup>
import MainArrow from '@/components/MainArrow.vue';
</script>

<template>
	<section>
		<h2>
			Как это
			<br />
			работает?
		</h2>
		<p>
			Вы даёте нам задачу — а мы собираем
			<br />
			под неё уникальную команду
			<br />
			креативных специалистов.
		</p>
		<p>
			Все параметры работы подбираются
			<br />
			под ваш запрос: время, сложность
			<br />
			и стоимость.
		</p>
		<h3>Но!</h3>
		<p>
			Качество креативного продукта
			<br />
			остается всегда на высоте —
			<br />
			ведь мы в Комьюнити любим
			<br />
			мутить стилёк ;)
		</p>
		<h3>
			Убедись сам
			<MainArrow />
		</h3>
	</section>
</template>

<style lang="scss" scoped>
section {
	margin-top: -47px;
	max-width: 80%;
}
p {
	line-height: 21px;
	margin: 13px 0;
}
h2 {
	font-weight: 700;
	font-size: 32px;
	margin-bottom: 28px;
}
h3 {
	font-size: 20px;
	font-weight: 600;
	line-height: 24px;
	text-align: right;
	margin: 30px 0;
}
</style>
