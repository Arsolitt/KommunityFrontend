<script setup>
import MainArrow from '@/components/MainArrow.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import BaseContainer from '@/components/BaseContainer.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import SectionText from '@/components/SectionText.vue';
</script>

<template>
	<BaseContainer>
		<section class="section">
			<SectionContainer>
				<SectionHeader>
					Как это
					<br />
					работает?
				</SectionHeader>
				<SectionText>
					Вы даёте нам задачу — а мы
					<br />
					собираем под неё уникальную
					<br />
					команду креативных специалистов.
				</SectionText>
				<br />
				<SectionText>
					Все параметры работы подбираются
					<br />
					под ваш запрос: время, сложность
					<br />
					и стоимость.
				</SectionText>
				<h3 class="section__separator">Но!</h3>
				<SectionText>
					Качество креативного продукта
					<br />
					остается всегда на высоте —
					<br />
					ведь мы в Комьюнити любим
					<br />
					мутить стилёк ;)
				</SectionText>
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
	margin-top: -48px;
	&__separator {
		font-size: 20px;
		font-weight: 600;
		line-height: 24px;
		text-align: right;
		margin: 30px 0;
	}
}
</style>
