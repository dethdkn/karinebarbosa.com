<script setup lang='ts'>

</script>

<template>
	<header class="relative h-screen flex items-center z-50">
		<div class="flex flex-col justify-center items-center lg:block lg:container mx-auto">
			<h1 class="text-2xl md:text-5xl font-bold font-['Poppins'] text-white inline-block">
				Karine Barbosa
			</h1>

			<h2 class="text-lg md:text-2xl mt-5 text-[#ffffffcc]">
				<span class="text-white border-b-2 border-[#df2b61] pb-1">Administração</span> & <span class="text-white border-b-2 border-[#df2b61] pb-1">Estética</span>
			</h2>

			<div class="flex mt-3 space-x-3">
				<NuxtLink to="https://www.linkedin.com/in/karinenobarbosa/" external target="_blank" class="flex justify-center items-center bg-[#ffffff1a] rounded-full w-10 h-10 mt-2 hover:bg-[#df2b61]">
					<Icon name="mdi:linkedin" color="white" size="20" />
				</NuxtLink>
				<NuxtLink to="mailto:karinenobarbosa@gmail.com" class="flex justify-center items-center bg-[#ffffff1a] rounded-full w-10 h-10 mt-2 hover:bg-[#df2b61]">
					<Icon name="mi:email" color="white" size="20" />
				</NuxtLink>
				<NuxtLink to="https://api.whatsapp.com/send?phone=5521972992201&text=Oi%20Karine,%20vim%20do%20seu%20site!" external target="_blank" class="flex justify-center items-center bg-[#ffffff1a] rounded-full w-10 h-10 mt-2 hover:bg-[#df2b61]">
					<Icon name="ic:baseline-whatsapp" color="white" size="20" />
				</NuxtLink>
			</div>
		</div>
	</header>
</template>
