<script setup>
import SectionHeader from '@/components/SectionHeader.vue';
import SectionText from '@/components/SectionText.vue';
import BaseContainer from '@/components/BaseContainer.vue';
import { onMounted } from 'vue';

onMounted(() => {
	const drops = document.querySelectorAll('.cubes-drop_bounce');

	const dropsObserver = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('cubes-drop_bounce');
				return;
			}
			entry.target.classList.remove('cubes-drop_bounce');
		});
	});

	drops.forEach(element => {
		dropsObserver.observe(element);
	});
});
</script>

<template>
	<section class="section">
		<BaseContainer>
			<SectionHeader>Мы в интернете!</SectionHeader>
			<SectionText>
				Да, да — хватит тратить свое время
				<br />
				и ехать в офис ради небольшого диалога.
			</SectionText>
			<br />
			<SectionText>
				С нами можно побщаться
				<br />
				в мессенджерах и в программах
				<br />
				удаленного доступа (Skype, Discord,
				<br />
				Zoom и другие...)
			</SectionText>
		</BaseContainer>
		<div class="cubes-wrapper">
			<img
				alt=""
				class="cubes-drop__photo cubes-drop_bounce"
				src="@/assets/svg/cubes-drop__photo.svg" />
			<img
				alt=""
				class="cubes-drop__brush cubes-drop_bounce"
				src="@/assets/svg/cubes-drop__brush.svg" />
			<img
				alt=""
				class="cubes-drop__person cubes-drop_bounce"
				src="@/assets/svg/cubes-drop__person.svg" />
			<img alt="" class="cubes" src="@/assets/svg/cubes.svg" />
		</div>
	</section>
</template>
<style lang="scss" scoped>
.section {
	margin-top: -30px;
}
.cubes-wrapper {
	position: relative;
	margin-top: 80px;
	.cubes {
		&-drop__photo {
			position: absolute;
			left: 9%;
			top: -32%;
		}
		&-drop__brush {
			position: absolute;
			left: 43%;
			top: 15%;
		}
		&-drop__person {
			position: absolute;
			left: 69%;
			top: -18%;
		}
		&-drop_bounce {
			animation: cubes-drop_bounce 1s;
			@keyframes cubes-drop_bounce {
				0% {
					transform: translateY(0%);
				}
				50% {
					transform: translateY(20%);
				}
				100% {
					transform: translateY(0%);
				}
			}
		}
	}
}
</style>
