import { AutoMap } from "@automapper/classes";
import { UserBasicDto } from "../user/userBasic.dto";

export class ReviewDto {
    @AutoMap()
    id!: number;

    @AutoMap()
    rating!: number;

    @AutoMap()
    comment!: string;

    @AutoMap(() => UserBasicDto)
    user?: UserBasicDto;
}