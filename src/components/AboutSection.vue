<script setup>
import MainArrow from '@/components/MainArrow.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import BaseContainer from '@/components/BaseContainer.vue';
</script>

<template>
	<BaseContainer>
		<section class="section">
			<SectionContainer>
				<h2 class="section__header">
					Как это
					<br />
					работает?
				</h2>
				<p class="section__text">
					Вы даёте нам задачу — а мы
					<br />
					собираем под неё уникальную
					<br />
					команду креативных специалистов.
				</p>
				<br />
				<p class="section__text">
					Все параметры работы подбираются
					<br />
					под ваш запрос: время, сложность
					<br />
					и стоимость.
				</p>
				<h3 class="section__separator">Но!</h3>
				<p class="section__text">
					Качество креативного продукта
					<br />
					остается всегда на высоте —
					<br />
					ведь мы в Комьюнити любим
					<br />
					мутить стилёк ;)
				</p>
				<h3 class="section__separator">
					Убедитесь
					<br />
					сами
					<MainArrow />
				</h3>
			</SectionContainer>
		</section>
	</BaseContainer>
</template>

<style lang="scss" scoped>
.section {
	margin-top: -47px;
	&__header {
		font-weight: 700;
		font-size: 32px;
		line-height: 35px;
		margin-bottom: 28px;
	}
	&__text {
		line-height: 21px;
		//margin: 13px 0;
	}
	&__separator {
		font-size: 20px;
		font-weight: 600;
		line-height: 24px;
		text-align: right;
		margin: 30px 0;
	}
}
</style>
