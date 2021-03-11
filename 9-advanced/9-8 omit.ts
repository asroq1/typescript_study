{
	type Video = {
		id: string
		title: string
		url: string
		data: string
	}

	type VideoMetaData = Omit<Video, 'data' | 'url' | 'test'> // Video에 없는 것도 제외 가능하다>

	function getVideo(id: string): Video {
		return {
			id,
			title: 'video',
			url: 'https://...',
			data: 'byte=data..',
		}
	}
	// Omit 을 활용해 기존의 타입에서 원하는 것만 골라서 제외하고 싶을 때 유용하다
	function getVideoMetaData(id: string): VideoMetaData {
		return {
			id: id,
			title: 'title',
		}
	}
}
