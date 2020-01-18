<template>
	<div class="body">
		
		<div class="container">
			<div class="banner">
			<img src="../assets/image/special.png" />
		</div>
			<div class="row">
				<div class="col-5" v-for="(item,index) in special" :key="index">
					<img :src="item.banner" />
					<h1>{{item.title}}</h1>					
					<h4>{{item.introduction}}</h4>
					<p>更新{{item.updated}}...{{item.viewCount}}浏览...{{item.followersCount}}关注</p>					
				</div>
			</div>
			<div align="center">				
				<button style="border-radius: 25px; height: 62px; background-color: #ffffff; ">
					<router-link to="/special/all" style="color: #8590a6; font-size: 30px; text-decoration: none;">查看更多专题 ></router-link>
				</button>
			</div>
			
			
			<div>
				<h1>圆桌讨论</h1>
			</div>
			
			
			<div class="row">
				<div class="col-5" v-for="(item,index) in roundTable" :key="index">
					<img :src="item.banner" style="width: 545px; height: 280px;" />
					<h1>{{item.name}}</h1>
					<a href="#">{{item.urlToken}}</a>
					<p>{{item.includeCount}}位嘉宾参与...{{item.visitsCount}}人关注</p>
					<hr />
				</div>
			</div>
			
			<div align="center">				
				<button style="border-radius: 25px; height: 62px; background-color: #ffffff; ">
					<router-link to="/roundTable/all" style="color: #8590a6; font-size: 30px; text-decoration: none;">查看更多圆桌></router-link>
				</button>
			</div>
			
		</div>

	</div>
</template>

<script>
	export default {		
		data() {
			return {
				special: [],
				roundTable:[]
			};
			
		},
		created() {
			this.axios.get('http://localhost:8080/api/special').then(res => {
				this.special = res.data.data;
			});
			this.axios.get('http://localhost:8080/api/roundTable').then(res => {
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
		width: 80%;
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
	.col-5 {
		flex: 0 0 50%;
	}
</style>
