<script setup>
import MainArrow from '@ui/MainArrow.vue';
import SectionContainer from '@ui/SectionContainer.vue';
import BaseContainer from '@ui/BaseContainer.vue';
import SectionHeader from '@ui/SectionHeader.vue';
import SectionText from '@ui/SectionText.vue';
import SectionSeparator from '@ui/SectionSeparator.vue';
</script>

<template>
	<section class="section">
		<BaseContainer>
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
				<SectionSeparator>Но!</SectionSeparator>
				<SectionText>
					Качество креативного продукта
					<br />
					остается всегда на высоте —
					<br />
					ведь мы в Комьюнити любим
					<br />
					мутить стилёк ;)
				</SectionText>
				<SectionSeparator>
					Убедитесь
					<br />
					сами
					<MainArrow />
				</SectionSeparator>
			</SectionContainer>
		</BaseContainer>
	</section>
</template>

<style lang="scss" scoped>
.section {
	margin-top: -48px;
}
</style>
