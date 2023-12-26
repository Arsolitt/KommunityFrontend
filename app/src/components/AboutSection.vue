<script setup>
import MainArrow from '@/components/MainArrow.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import BaseContainer from '@/components/BaseContainer.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import SectionText from '@/components/SectionText.vue';
import SectionSeparator from '@/components/SectionSeparator.vue';
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
