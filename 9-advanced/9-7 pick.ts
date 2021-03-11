{
	type Video = {
		id: string
		title: string
		url: string
		data: string
	}

	type VideoMetaData = Pick<Video, 'id' | 'title'>

	function getVideo(id: string): Video {
		return {
			id,
			title: 'video',
			url: 'https://...',
			data: 'byte=data..',
		}
	}
	// pick을 활용해 기존의 타입에서 원하는 것만 골라서 사용하고 싶을 때 유용하다
	function getVideoMetaData(id: string): VideoMetaData {
		return {
			id: id,
			title: 'title',
		}
	}
}
