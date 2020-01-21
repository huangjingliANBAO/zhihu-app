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



			<div>				
				<h1>热门收藏夹</h1>
			</div>
			<div class="row">
				<div class="col-5" v-for="(favorite,index) in favorites" :key="index">
					<div class="card">
						<div class="card-heard">
							<div class="card-header-row">
								<div class="header-col-1">
									<h3>{{ favorite.title }}</h3>
								</div>
								<div class="header-col-2"><input type="button" value="关注收藏夹"></div>
							</div>
							<div class="card-header-row">
								<div class="header-col-3">
									<ul class="">
										<li><img :src="favorite.creatorAvatar" alt=""></li>
										<li>{{ favorite.creatorName }}</li>
										<li class="header-text">创建</li>
										<li class="header-text">{{ favorite.followers }}人关注</li>
									</ul>
									
								</div>
							</div>
						</div>
<hr />
						<div class="card-body">
							<div class="card-body-row">
								<div class="card-col-1">{{ favorite.questionTitle}}</div>
							</div>
							<div class="card-body-row">
								<div class="card-col-2">{{ favorite.answerAuthorName}}:{{ favorite.answerContent}}</div>
							</div>
							<div class="card-body-row">
								<div class="card-col-3">
									<ul class="body-ul">
										<li>回答</li>
										<li>{{ favorite.voteupCount }}赞同</li>
										<li>{{ favorite.commentCount }}评论</li>
									</ul>
								</div>
							</div>
							<br>

							<div class="card-body-row">
								<div class="card-col-1">{{ favorite.questionTitle}}</div>
							</div>
							<div class="card-body-row">
								<div class="card-col-2">{{ favorite.answerAuthorName}}:{{ favorite.answerContent}}</div>
							</div>
							<div class="card-body-row">
								<div class="card-col-3">
									<ul class="body-ul">
										<li>回答</li>
										<li>{{ favorite.voteupCount }}赞同</li>
										<li>{{ favorite.commentCount }}评论</li>
									</ul>
								</div>
							</div>
							<br>
							<div class="card-body-row">
								<div class="card-col-4">已经收藏{{favorite.totalCount}}条内容<i class="fa fa-angle-right"></i></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div align="center">
				<button style="border-radius: 25px; height: 62px; background-color: #ffffff; ">
					<router-link to="/favorite/hot" style="color: #8590a6; font-size: 30px; text-decoration: none;">查看更多收藏夹></router-link>
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
				roundTable: [],
				favorites: []
			};

		},
		created() {
			this.axios.get('http://localhost:8080/api/special').then(res => {
				this.special = res.data.data;
			});
			this.axios.get('http://localhost:8080/api/roundTable').then(res => {
				this.roundTable = res.data.data;
			});
			this.axios.get('http://localhost:8080/api/favorite/').then(res => {
				this.favorites = res.data.data;
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
		margin: 20px auto;
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

	.card {
		width: 550px;
		height: 400px;
		border-radius: 4px;

		.card-heard {
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			height: 112px;
			border-bottom: 1px solid #ebebeb;
			overflow: hidden;
			margin: 0px 10px 20px 20px;
			width: 92%;

			.card-header-row {
				margin: 15px;
				display: flex;
				width: 100%;
				height: 48%;

				.header-col-1 {
					flex: 0 0 60%;

				}

				.header-col-3 {
					flex: 0 0 100%;

					ul {
						margin-top: -20px;
						width: 100%;
						display: flex;

						img {
							margin-left: -20px;
							width: 40px;
							height: 40px;
						}

						li {
							list-style-type: none;
						}

						li:last-child {
							margin-left: 30px;
						}

						.header-text {
							color: #999;
						}
					}
				}

				.header-col-2 {
					flex: 0 0 37%;

					input[type=button] {
						width: 102px;
						height: 34px;
						border-radius: 3px;
						font-size: 14px;
						font-weight: 600;
						color: #0084ff;
						border: none;
						float: right;
						outline: none;
						background-color: rgba(0, 132, 255, .08)
					}
				}
			}

		}

		.card-body {
			width: 92%;
			height: 210px;
			margin: 20px 20px 20px 20px;

			.card-body-row {
				display: flex;
				width: 100%;

				.card-col-1 {
					flex: 0 0 100%;
					display: block;
					height: 21px;
					line-height: 21px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					font-weight: 600;
					font-synthesis: style;
				}

				.card-col-2 {
					margin-top: 4px;
					height: 21px;
					line-height: 21px;
					color:
						#444;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				.card-col-3 {
					.body-ul {
						height: 17px;
						line-height: 17px;
						font-size: 12px;
						color: #999;
						display: flex;
						margin-left: -20px;
						list-style-type: none;

						li:first-child {
							margin-left: -15px;
						}

						li {
							margin-left: 20px;
						}

					}
				}

				.card-col-4 {
					height: 24px;
					font-size: 14px;
					color: #8590a6;
					font-weight: 600;
					font-synthesis: style;

					i {
						color: #8590a6;
						font-size: 22px;
						margin: 5px 20px;
					}
				}
			}
		}
	}
</style>
