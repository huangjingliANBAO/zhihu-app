<template>
	<div class="body">
		<div class="container">
			<div class="banner">
				<h3>圆桌</h3>
			</div>
			<div class="row">
				<div class="col-4" v-for="(item,index) in roundTable" :key="index">
					<div>
						<img :src="item.banner" style="width: 217px; height: 215px;border-radius: 25px;" />
						<h3>{{item.name}}</h3>
						<p>该圆桌被浏览了{{item.visitsCount}}次</p>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				roundTable: []
			};
		},
		created() {
			this.axios.get('http://localhost:8080/api/roundTable/all').then(res => {
				this.roundTable = res.data.data;
			});
		}
	};
</script>
<style lang="scss" scoped>
	*,
	:after,
	:before {
		box-sizing: border-box;
	}
	.body {
		background-color: #f6f6f6;
	}
	.banner {
		margin-bottom: 10px;
		margin-top: 80px;
		height: 80px;
		border: 1px solid #d6d6d6;
		box-shadow: 2px 5px 5px #ddd;
		align-items: center;
	}
	.container {
		margin: 0 auto;
		width: 60%;
	}
	.row {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	[class*='col-'] {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		border: 1px solid #eee;
	}
	.col-4 {
		flex: 0 0 25%;
	}
</style>
