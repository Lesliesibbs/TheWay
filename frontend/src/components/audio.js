import React from "react";
import {
	PlayButton,
	Timer,
	Progress,
	VolumeControl,
} from "react-soundplayer/components";
import { withSoundCloudAudio } from "react-soundplayer/addons";
import { MusicNoteIcon } from "@heroicons/react/outline";

const AudioPlayer = withSoundCloudAudio((props) => {
	 const { currentTime, duration } = props;

    return (
		<div className={props.dclass}>
			<div>
				<MusicNoteIcon className="float-left h-14 w-14 text-yellow-400 " />
				<div className="ml-16">
					<h6 className="font-light text-lg text-gray-400">
						Podcast by {props.author}
					</h6>
					<h5 className="font-bold md:font-bold tracking-widest text-2xl -mt-2">
						{props.trackTitle}
					</h5>
				</div>
			</div>
			<div className="player mt-2">
				<div className="float-left flex items-center justify-center w-16 h-16 text-red-400 transition-colors duration-150 bg-gray-200 rounded-full focus:shadow-outline hover:bg-indigo-800">
					<PlayButton
						className="w-6 h-6 flex items-center justify-center"
						{...props}
					/>
				</div>
				<div className="mt-3 ml-20">
					<Progress
						className="relative bg-gray-200 rounded h-4 "
						innerClassName="bg-red-400 rounded-full h-4 "
						value={(currentTime / duration) * 100 || 0}
						{...props}
					/>
				</div>
				<div className=" ml-20 flex items-center">
					<VolumeControl
						className="-mt-5"
						buttonClassName=""
						{...props}
					/>
					<Timer className="text-red-400 mt-1 ml-94" {...props} />
				</div>
			</div>
		</div>
	);
});

export default AudioPlayer;
